
export type TimeInterval = '1h' | '24h' | '7d' | '30d' | '3m' | '1y';
export type TimePeriod = 'hour' | 'day' | 'weekofyear' | 'month' | 'year';
export type HistogramStat = { start: number; end: number; value: number };



export type Component = { title: string; description: string };
export type MobileComponent = { title: string; href: string };

export type NavModel = 'system' | 'light' | 'dark';

export type AppBarMenu = {
    anchor: string,
    label: string
    chain?: number
};

export type AppBar = {
    children: React.ReactNode, 
    menu: AppBarMenu[]
}

export type PromptDemo = { prompt: string, res: string, references: string[] }[];
export type EmailState = {address: string, pattern: RegExp, insert: string[]};