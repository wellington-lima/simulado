import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export function GET(request: Request) {
    const {searchParams} = new URL(request.url);
    const materia = searchParams.get('materia');

    if(materia == '1') {
        return NextResponse.json(getPerguntas("scrum.json"));
    }
}

export function getPerguntas(arquivo: string) {
    const filePath = path.join(process.cwd(), "src/data", arquivo);
    const fileData = fs.readFileSync(filePath);
    const perguntas = JSON.parse(fileData.toString());

    return perguntas;
}