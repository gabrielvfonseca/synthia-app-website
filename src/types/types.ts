
export type TimeInterval = '1h' | '24h' | '7d' | '30d' | '3m' | '1y';
export type TimePeriod = 'hour' | 'day' | 'weekofyear' | 'month' | 'year';
export type HistogramStat = { start: number; end: number; value: number };

export type OpenAIModelIdWithType =
  | { type: 'chat_completions'; value: OpenAIChatCompletionsModelId }
  | { type: 'completions'; value: OpenAICompletionsModelId };

export type OpenAIChatCompletionsModelId =
  | 'gpt-4'
  | 'gpt-4-0314'
  | 'gpt-4-32k'
  | 'gpt-4-32k-0314'
  | 'gpt-3.5-turbo'
  | 'gpt-3.5-turbo-0301';

export type OpenAICompletionsModelId =
  | 'text-davinci-003'
  | 'text-davinci-002'
  | 'text-curie-001'
  | 'text-babbage-001'
  | 'text-ada-001'
  | 'davinci'
  | 'curie'
  | 'babbage'
  | 'ada';

export type OpenAIModelId =
  | OpenAIChatCompletionsModelId
  | OpenAICompletionsModelId;

export const SUPPORTED_MODELS: {
  chat_completions: OpenAIChatCompletionsModelId[];
  completions: OpenAICompletionsModelId[];
} = {
  chat_completions: [
    'gpt-4',
    'gpt-4-0314',
    'gpt-4-32k',
    'gpt-4-32k-0314',
    'gpt-3.5-turbo',
    'gpt-3.5-turbo-0301',
  ],
  completions: [
    'text-davinci-003',
    'text-davinci-002',
    'text-curie-001',
    'text-babbage-001',
    'text-ada-001',
    'davinci',
    'curie',
    'babbage',
    'ada',
  ],
};

export type FileData = { path: string; name: string; content: string };
export type PathContentData = Pick<FileData, 'path' | 'content'>;
export type ProjectChecksums = Record<FileData['path'], string>;




export type DemoData = { prompt: string, res: string, references: string[] }[];
export type EmailState = {address: string, pattern: RegExp, insert: string[]};