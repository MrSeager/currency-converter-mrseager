export type CurrencyInfo = {
    iso_code: string;
    name: string;
    symbol: string;
};

export type CurrPageProps = 'history' | 'compare' | 'favorites' | 'log';

export interface SectionOneProps {
    sendCurr: string;
    setSendCurr: (sendCurr: string) => void;
    sendValue: number;
    setSendValue: (sendValue: number) => void;
    receiveCurr: string;
    setReceiveCurr: (receiveCurr: string) => void;
    receiveValue: number;
    setReceiveValue: (receiveValue: number) => void;
    getFlagSrc: (isoCode: string) => string;
    sendCurrencyInfo: CurrencyInfo | undefined;
    receiveCurrencyInfo: CurrencyInfo | undefined;
    currencies: CurrencyInfo[];
}

export interface SectionTwoItemProps {
    name: string;
    value: number;
}

export interface SectionTwoBtnTopProps {
    name: CurrPageProps;
    currPage: CurrPageProps;
    setCurrPage: (name: CurrPageProps) => void;
}

export interface SectionTwoBtnPerProps {
    name: string;
    period: string;
    setPeriod: (period: string) => void;
}