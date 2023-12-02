import { NextResponse } from "next/server";

import client from "../database";

export async function GET(request) {

    if (request.credentials !== "same-origin") {
        return NextResponse.json({message: "Não Autorizado!", sucess:0},{ status: 403 });
    }

    const { rows } = await client.query("SELECT * FROM noticias");

    if (rows == '') {
        return NextResponse.json({message: "Não existem noticias cadastradas!",rows, sucess: 1},{ status: 200 });
    }

    return NextResponse.json({rows, sucess:1}, { status: 200});
} 