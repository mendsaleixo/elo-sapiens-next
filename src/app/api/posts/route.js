// src/app/api/posts/route.js

import { articles } from '@/data/mock-articles';
import { NextResponse } from 'next/server';

// O nome da função corresponde ao método HTTP que ela vai tratar.
export async function GET(request) {
  
  // Por enquanto, a nossa lógica é simples: apenas retornar todos os artigos.
  
  // Usamos NextResponse.json() para retornar os dados em formato JSON
  // com os cabeçalhos corretos.
  return NextResponse.json(articles);
}