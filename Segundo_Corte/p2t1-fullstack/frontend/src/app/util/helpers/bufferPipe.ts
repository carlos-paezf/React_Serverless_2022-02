import { Buffer } from 'buffer'


export const bufferPipe = ( bufferProp: string ): string => Buffer.from( bufferProp ).toString()