import React from 'react'
import {
    Text,
    Spinner,
    Badge,
} from "@chakra-ui/react";
import { useState } from "react";
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from "react-query/hydration";

type Price = {
    id: string,
    symbol: string,
    name: string,
    image: string,
    current_price: number,
    price_change_percentage_24h: number,
    total_volume: number,
    market_cap: number
};



// Memanggil API
const getMarket = async (page = 1) => {
    const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=IDR&order=market_cap_desc&per_page=10&page=1&page=${page}`;
    const response = await fetch(URL)
    if (!response.ok) {
        throw new Error("Fetching Error");
    }
    return await response.json();
}

// Format Tampilan Angka
const formatNumber = (num: number) => {
    return Intl.NumberFormat("id-id").format(num)
}

// Format Tampilan Persen 24H %
const Percentage = ({ percent }: { percent: number }) => {
    const formatPercent = Intl.NumberFormat("en-US", {
        style: "percent",
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    }).format(percent / 100);

    let color = "black";
    if (percent > 0) {
        color = "green.500";
    } else if (percent < 0) {
        color = "red.500";
    }

    return <Text color={color}>{formatPercent}</Text>;
};

// SSR Hdyrate
export async function getStaticProps() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(["market", 1], () => getMarket());
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
}

export default function Market() {
    const [page, setPage] = useState(1)
    const nextPage = () => {
        setPage(old => old + 1)
    }
    const previousPage = () => {
        setPage((old) => old - 1);
    };

    const { data, isError, isLoading, isFetching, isSuccess } = useQuery(
        ["market", page],
        () => getMarket(page),
        {
            staleTime: 3000,
            refetchInterval: 3000,
            // initialData: initialPrice,
        }
    );

    return (
        <div className="container mx-auto md:px-20 lg:px-20 md:pb-20">
            {isFetching && (
                <Spinner color="blue.500" position="fixed" top={10} right={10} />
            )}
            <div className="py-1">
            </div>
            <div className=" sm:-mx-8 px-4  sm:px-8 py-4 overflow-x-auto ">
                <div className="inline-block min-w-full shadow rounded-2xl overflow-hidden  ">
                    <table className="min-w-full leading-normal  ">
                        <thead >
                            <tr>
                                <th className="px-8 py-3 border-b-2 border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-indigo-dark  text-left text-xs font-semibold text-gray-600 dark:text-gray-100 uppercase tracking-wider">
                                    COIN
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-indigo-dark text-left text-xs font-semibold text-gray-600 dark:text-gray-100 uppercase tracking-wider">
                                    LAST PRICE
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-indigo-dark text-left text-xs font-semibold text-gray-600 dark:text-gray-100 uppercase tracking-wider">
                                    24 % CHANGE
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-indigo-dark text-left text-xs font-semibold text-gray-600 dark:text-gray-100 uppercase tracking-wider">
                                    TOTAL VOLUME
                                </th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-indigo-dark text-left text-xs font-semibold text-gray-600 dark:text-gray-100 uppercase tracking-wider">
                                    MARKET CAP
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading && <Text>Loading...</Text>}
                            {isError && <Text>There was an error processing your request</Text>}
                            {isSuccess && data?.map((price: Price) => (
                            <tr>
                                    <td className="px-8 py-5 border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-indigo-dark text-sm">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 w-10 h-10">
                                            <img className="w-full h-full rounded-full" src={price.image} />
                                        </div>
                                        <div className="ml-3">
                                                <p className="font-bold text-gray-600 whitespace-no-wrap dark:text-gray-100 ">
                                                {price.id}
                                                </p>
                                            </div>
                                            <div>
                                                <Badge ml={3}>{price.symbol}</Badge>
                                            </div>
                                    </div>
                                </td>
                                    <td className="px-2 py-5 border-b border-gray-200 bg-white dark:border-gray-700   dark:bg-indigo-dark text-sm">
                                        <p className="font-bold  text-gray-600 whitespace-no-wrap dark:text-gray-100 ">Rp  { formatNumber(price.current_price)}</p>
                                </td>
                                    <td className=" font-bold  px-5 py-5 border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-indigo-dark text-sm">
                                        <Percentage percent={price.price_change_percentage_24h} />
                                </td>
                                    <td className="px-2 py-5 border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-indigo-dark text-sm">
                                        <p className="font-bold  text-gray-600 whitespace-no-wrap dark:text-gray-100 ">Rp  {formatNumber(price.total_volume)}</p>
                                    </td>
                                    <td className="px-2 py-5 border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-indigo-dark text-sm">
                                        <p className="font-bold  text-gray-600 whitespace-no-wrap dark:text-gray-100 ">Rp  {formatNumber(price.market_cap)}</p>
                                    </td>

                            </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="px-5 py-5 bg-white dark:bg-indigo-dark dark:border-gray-600 border-t flex flex-col xs:flex-row items-left md:items-center lg:items-center xs:justify-between">
                        <span className="text-xs xs:text-sm text-gray-700 dark:text-gray-200">
                            <Text className="font-bold" >{page} > 100</Text>
                        </span>
                        <div className="inline-flex mt-2 xs:mt-0">
                            <button onClick={previousPage}
                                disabled={page === 1 ? true : false} className="text-sm bg-gray-300 dark:text-gray-200 dark:bg-indigo-900  hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                Prev
                        </button>
                            <button onClick={nextPage} className="text-sm bg-gray-300 dark:text-gray-200 dark:bg-indigo-900  hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                Next
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

