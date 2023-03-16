import UAParser from "ua-parser-js";

import { NextRequest, NextResponse, userAgent } from 'next/server';

export const isMobile = () => {

    const parser = new UAParser("user-agent");
    const result = parser.getResult()

    console.log(result)
};