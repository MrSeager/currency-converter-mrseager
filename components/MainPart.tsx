'use client';
//Components
import { useState, useEffect } from "react";
import SectionOne from "./SectionOne";
//Types
import { CurrencyInfo } from "@/types/types";

export default function MainPart() {
    const [sendCurr, setSendCurr] = useState<string>('USD');
    const [sendValue, setSendValue] = useState<number | ''>(1000);

    const [receiveCurr, setReceiveCurr] = useState<string>('EUR');
    const [receiveValue, setReceiveValue] = useState<number>(1000);

    const [currencies, setCurrencies] = useState<CurrencyInfo[]>([]);

    const AVAILABLE_FLAGS = [
        'aed', 'ars', 'aud', 'bdt', 'bgn', 'bhd', 'brl', 'cad',
        'chf', 'clp', 'cny', 'cop', 'cyp', 'czk', 'dkk', 'egp',
        'eur', 'gbp', 'hkd', 'hnl', 'hrk', 'htg', 'huf', 'idr',
        'inr', 'isk', 'jod', 'jpy', 'kes', 'krw', 'kwd', 'lbp',
        'lkr', 'mad', 'mxn', 'myr', 'ngn', 'nok', 'npr', 'nzd',
        'omr', 'pen', 'php', 'pkr', 'pln', 'qar', 'ron', 'rub',
        'sar', 'sek', 'sgd', 'thb', 'try', 'twd', 'uah', 'vnd',
        'zar',
    ];

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const res = await fetch('https://api.frankfurter.dev/v2/currencies');
                if (!res.ok) throw new Error('Failed to fetch currencies');
                const data: CurrencyInfo[] = await res.json();
                
                // Filter here before setting state
                const filtered = data.filter((c) =>
                    AVAILABLE_FLAGS.includes(c.iso_code.toLowerCase())
                );
                
                setCurrencies(filtered);
            } catch (err) {
                console.error('Failed to load currencies:', err);
            }
        };

        fetchCurrencies();
    }, []);

    // Get flag filename from ISO code
    const getFlagSrc = (isoCode: string) => {
        const twoLetter = isoCode.slice(0, -1).toLowerCase();
        return `/images/flags/${twoLetter}.webp`;
    };

    const sendCurrencyInfo = currencies.find((c) => c.iso_code === sendCurr);
    const receiveCurrencyInfo = currencies.find((c) => c.iso_code === receiveCurr);

    return(
        <main className="w-full max-w-[120rem] px-15 py-10 flex flex-col gap-5">
            <h1 className="uppercase text-[20px]">Check the rate</h1>
            <SectionOne 
                sendCurr={sendCurr}
                setSendCurr={setSendCurr}
                sendValue={sendValue}
                setSendValue={setSendValue}
                receiveCurr={receiveCurr}
                setReceiveCurr={setReceiveCurr}
                receiveValue={receiveValue}
                setReceiveValue={setReceiveValue}

                getFlagSrc={getFlagSrc}
                sendCurrencyInfo={sendCurrencyInfo}
                receiveCurrencyInfo={receiveCurrencyInfo}
                currencies={currencies}
            />
        </main>
    );
}