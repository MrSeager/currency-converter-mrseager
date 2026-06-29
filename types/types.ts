export type CurrencyInfo = {
    iso_code: string;
    name: string;
    symbol: string;
};

export interface SectionOneProps {
    sendCurr: string;
    setSendCurr: (sendCurr: string) => void;
    sendValue: number | '';
    setSendValue: (sendValue: number | '') => void;
    receiveCurr: string;
    setReceiveCurr: (receiveCurr: string) => void;
    receiveValue: number;
    setReceiveValue: (receiveValue: number) => void;
    getFlagSrc: (isoCode: string) => string;
    sendCurrencyInfo: CurrencyInfo | undefined;
    receiveCurrencyInfo: CurrencyInfo | undefined;
    currencies: CurrencyInfo[];
}