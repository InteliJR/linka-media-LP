# Tracking Setup

## Variaveis de Ambiente

Use `frontend/.env.local` para desenvolvimento local e replique os mesmos valores no projeto da Vercel.

Obrigatorias:

- `NEXT_PUBLIC_GTM_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`
- `META_ACCESS_TOKEN`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`

Opcionais:

- `META_API_VERSION` (padrao: `v24.0`)
- `META_TEST_EVENT_CODE` (para testes no Events Manager)

## O que ja ficou implementado

- GTM carregado no layout global com `@next/third-parties/google`
- Meta Pixel base carregado no layout global com `PageView`
- Formulario enviando para `POST /api/lead`
- Deduplicacao entre client e server usando o mesmo `event_id`
- CAPI enviando `Lead` com SHA-256 para email/telefone quando disponiveis

## Configuracao no GTM

Como o container do GTM fica fora do repositorio, falta apenas configurar o disparo dentro do painel do Google Tag Manager:

1. Crie uma `Data Layer Variable` chamada `event_id` apontando para `event_id`.
2. Crie um gatilho do tipo `Custom Event` para o evento `generate_lead`.
3. Crie a tag da Meta para disparar o evento `Lead` usando o Pixel ID `737796918588832`.
4. Passe o `eventID` da tag usando a variavel `{{event_id}}`.

Importante:

- O app ja injeta o Pixel base e o `PageView`, entao nao duplique a inicializacao base do Pixel dentro do GTM.
- O evento client-side deve reaproveitar o mesmo `event_id` enviado pela `dataLayer` para deduplicar corretamente com a CAPI.
