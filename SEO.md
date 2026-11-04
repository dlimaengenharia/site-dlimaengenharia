# SEO, GEO e AEO: D'Lima Engenharia

- **SEO:** aparecer bem no Google.
- **GEO:** ser citada por IAs como ChatGPT, Claude, Gemini e Perplexity.
- **AEO:** ser a resposta direta para perguntas, em buscas por voz e nos trechos em destaque do Google.

## O que já está no site

| Item | Onde | Para que serve |
|---|---|---|
| Título, descrição e palavras-chave | `lib/seo.js`, `app/layout.js` | O que aparece no Google |
| Endereço canônico de cada página | metadados das páginas | Evita conteúdo duplicado |
| Dados estruturados da empresa (`ProfessionalService` / `LocalBusiness`) | `lib/seo.js` | Endereço, telefone, serviços, Instagram e área atendida, legíveis por máquina |
| Perguntas frequentes visíveis e dados `FAQPage` | `lib/faq.js` | Respostas diretas para Google e IAs (AEO) |
| `sitemap.xml` | `app/sitemap.js` | Lista as páginas para o Google |
| `robots.txt` liberando buscadores e robôs de IA | `app/robots.js` | Permite que o site seja lido e citado (GEO) |
| `llms.txt` | `public/llms.txt` | Resumo da empresa em texto simples para IAs |
| Imagem de compartilhamento | `app/opengraph-image.js` | Prévia bonita no WhatsApp, LinkedIn e Facebook |
| Ícone do site (favicon) | `app/icon.svg` | Aba do navegador e resultados do Google |

> As perguntas e respostas ficam em `lib/faq.js`. Edite só esse arquivo: o texto visível e os dados estruturados se atualizam juntos.

## Antes de publicar

1. **Confirmar o domínio.** O padrão é `https://www.dlimaengenharia.com.br`. Se for outro, defina `NEXT_PUBLIC_SITE_URL` na hospedagem e atualize os links em `public/llms.txt`.
2. **Revisar as respostas das perguntas frequentes** com a Débora, principalmente prazos, área de atendimento e Anistia 2025.

## Depois de publicar (fora do código)

Estes passos dão o maior retorno para uma empresa local:

1. **Perfil da Empresa no Google (Google Meu Negócio).** Cadastre com o mesmo nome, endereço e telefone do site, categoria "Empresa de engenharia", fotos reais e horário de atendimento. É o que faz a empresa aparecer no mapa ao buscar "AVCB perto de mim".
2. **Avaliações no Google.** Peça a cada cliente atendido. As avaliações pesam muito no ranking local e nas respostas das IAs.
3. **Google Search Console.** Verifique o domínio (use `NEXT_PUBLIC_GOOGLE_VERIFICATION`, se escolher a verificação por meta tag) e envie `https://SEU-DOMINIO/sitemap.xml`.
4. **Bing Webmaster Tools.** Importe do Search Console. O Bing alimenta o ChatGPT e o Copilot.
5. **Mesmos dados em todo lugar.** Nome, endereço e telefone iguais no site, no Google, no Instagram, no LinkedIn e em diretórios.
6. **Link do site na bio do Instagram** e menções em associações, parceiros e diretórios de engenharia.

## Páginas de serviço

Cada serviço tem uma página própria em `/servicos/<serviço>`, com título e descrição para o Google, explicação, público, o que está incluso, etapas, perguntas frequentes, dados estruturados (`Service`, `BreadcrumbList` e `FAQPage`) e links para os outros serviços. O conteúdo de todas fica em `lib/servicePages.js`.

> Revise com a Débora principalmente: Anistia 2025, usucapião, CETESB (licenciamento) e os itens de Licenciamento Ambiental, que no layout original repetiam os de Alvarás.

## Próximos passos no site

- **Conteúdo de autoridade**: artigos curtos que respondem a dúvidas reais, como "Quanto tempo demora o AVCB em SP?" ou "Como regularizar um imóvel com a Anistia 2025?".
- **Fotos reais e registro profissional (CREA)** visíveis no site: reforçam credibilidade para o Google e para as IAs.
