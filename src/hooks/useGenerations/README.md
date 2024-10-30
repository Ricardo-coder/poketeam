# `useGenerations`

A função `useGenerations` é um hook personalizado em React que utiliza o SWR para buscar e gerenciar dados de uma API específica, definida em `GENERATIONS_API`. Ela retorna uma estrutura que inclui os dados de gerações (`generations`), o estado de carregamento (`isLoading`) e um possível erro (`isError`).

## Importação

```javascript
import { useGenerations } from '@/hooks/useGenerations';
```

## Tipos e Interfaces

### Interface `UseGenerations`

Define o formato de retorno da função `useGenerations`.

```typescript
interface UseGenerations {
  generations: Generations;
  isLoading: boolean;
  isError: unknown;
}
```

## Implementação

A função `useGenerations` utiliza o hook `useSWR` para buscar dados de uma API, definida em `GENERATIONS_API`, através de uma função auxiliar `fetcher`. Esse hook simplifica o gerenciamento de estados e fornece um cache leve para requisições HTTP.

### Parâmetros

A função `useGenerations` não recebe parâmetros.

### Retorno

A função retorna um objeto conforme a interface `UseGenerations`, com as seguintes propriedades:

- **generations** (`Generations`): Os dados obtidos da API, representando a estrutura `Generations`. 
- **isLoading** (`boolean`): Indica se os dados ainda estão sendo carregados.
- **isError** (`unknown`): Contém informações sobre um erro, se ocorreu, durante a requisição dos dados.

## Exemplo de Uso

```javascript
import { useGenerations } from '@/hooks/useGenerations';

function GenerationsComponent() {
  const { generations, isLoading, isError } = useGenerations();

  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Erro ao carregar dados</p>;

  return (
    <div>
      <h1>Gerações</h1>
      {/* Renderização dos dados de generations */}
      {generations.map((generation) => (
        <div key={generation.id}>{generation.name}</div>
      ))}
    </div>
  );
}
```

## Dependências

- `useSWR`: Um hook de gerenciamento de dados em React que facilita o cache e revalidação de dados.
- `fetcher`: Função utilitária para realizar a chamada à API.
- `GENERATIONS_API`: Constante contendo a URL ou endpoint da API de gerações.

## Considerações

- **Cache e revalidação**: O `useSWR` automaticamente realiza o cache dos dados e pode ser configurado para revalidá-los, o que pode melhorar a experiência do usuário ao evitar requisições desnecessárias.
- **Tratamento de erro**: O valor `isError` deve ser tratado para informar o usuário caso haja falha na comunicação com a API.