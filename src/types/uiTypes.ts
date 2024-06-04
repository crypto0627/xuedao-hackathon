export type TableDataType = {
    index: number;
    name: string;
    symbol: string;
    price: number;
    change: number;
    imgSrc: string;
}

export type CompanyDataType = {
    imgSrc: string;
}

export type MintButtonProps = {
    amount: number;
  }