---
sidebar_position: 3
---

# ⚙️ Tecnologias

## 🗓 Informações Gerais

- **Nome do Projeto:** Landing Page Linka Mídia

- **Tech Lead:** Thiago Gomes

- **Data de Entrada na Área:** 08/12

---

## Checklist de Entrada e Saída da Área de Tecnologia

### ✅ Checklist de Entrada

- [x] Documento de Visão de Produto validado
- [ ] Informações de contato do cliente recebidas (telefone, e-mail, Instagram)
- [ ] Fotos da equipe recebidas
- [ ] Conteúdos textuais definidos
- [ ] Acesso à conta Vercel (criar nova ou usar existente do cliente)
- [ ] Decisão sobre domínio (comprar novo ou usar existente)

### 📤 Checklist de Saída

- [ ] Stack definida e aprovada
- [ ] Estrutura de arquivos documentada
- [ ] Plano de implantação claro
- [ ] Documento validado com o time de Desenvolvimento
- [ ] Configurações de deploy na Vercel documentadas
- [ ] Serviço de envio de e-mail configurado
- [ ] DNS configurado (se aplicável)

---

## Stack Tecnológica

### Frontend
- **Framework/Biblioteca:** Next.js 15 (App Router)
- **Linguagem principal:** TypeScript
- **Styling:** Tailwind CSS
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Justificativa da escolha:**
  - Next.js com SSG garante performance excepcional e SEO otimizado
  - TypeScript previne erros em tempo de desenvolvimento
  - Tailwind permite desenvolvimento rápido com design consistente
  - Framer Motion oferece animações modernas e fluidas para scroll telling
  - Stack moderna e bem documentada, facilitando manutenção futura

### Backend
- **Linguagem:** Não aplicável (site estático)
- **API de formulário:** Serviço terceiro (Resend, EmailJS, Formspree ou Vercel Forms)
- **Justificativa:** Landing page estática não requer backend próprio. Formulário será gerenciado por serviço externo especializado.

### Banco de Dados
- **Tipo:** Não aplicável
- **Justificativa:** Site institucional sem necessidade de persistência de dados. Leads do formulário serão enviados diretamente por e-mail.

### Outras Tecnologias

**Hospedagem e Deploy:**
- **Plataforma:** Vercel
- **Estratégia:** Deploy automático via Git (main branch)
- **Justificativa:** Vercel é otimizada para Next.js, oferece CDN global, SSL automático, e deploys instantâneos

**Serviço de E-mail:**
- **Opção 1 (Recomendada):** Resend (https://resend.com)
  - API moderna e confiável
  - Free tier: 3.000 e-mails/mês
  - Integração simples com Next.js
- **Opção 2:** EmailJS (https://emailjs.com)
  - Free tier: 200 e-mails/mês
  - Client-side, sem necessidade de backend
- **Opção 3:** Vercel Forms
  - Integração nativa
  - Limitações do free tier
- **Decisão final:** A definir com o cliente baseado no volume esperado

**SEO e Analytics:**
- **robots.txt:** Configurado para indexação completa
- **sitemap.xml:** Geração automática via Next.js
- **JSON-LD Schema:** Dados estruturados para buscadores
- **Meta tags:** OG tags, Twitter Cards, meta descriptions completas
- **Google Analytics:** A configurar (se solicitado pelo cliente)
- **Meta Pixel:** A configurar (se solicitado pelo cliente)

**Domínio e DNS:**
- **Cenário 1:** Cliente já possui domínio
  - Configurar DNS apontando para Vercel
  - Manter e-mail corporativo existente
- **Cenário 2:** Comprar novo domínio
  - Registro.br ou provedor internacional
  - Configurar caixa de e-mail (Google Workspace, Zoho Mail, ou Titan)
  - Apontar DNS para Vercel

---

## Arquitetura da Solução

### Visão Geral da Arquitetura

Aplicação web estática (SSG - Static Site Generation) construída com Next.js, hospedada na Vercel com CDN global. O site é pré-renderizado em build time, gerando HTML/CSS/JS otimizados que são servidos estaticamente. Formulário de contato se comunica com serviço externo de e-mail via API client-side.

**Fluxo de dados:**
1. Usuário acessa o site → CDN da Vercel serve conteúdo estático
2. Usuário preenche formulário → JavaScript valida campos
3. Submit do formulário → API do serviço de e-mail processa
4. E-mail é enviado para contato@linkamedia.com.br
5. Usuário recebe confirmação visual de envio

### Componentes Principais

**Frontend (Next.js):**
- `layout.tsx` - Layout global, SEO metadata, StructuredData
- `page.tsx` - Página principal com todas as seções
- `sections/` - Componentes de seção (Hero, Services, Team, etc)
- `forms/ContactForm.tsx` - Formulário de contato com validação
- `ui/` - Componentes reutilizáveis (Button, Card, etc)

**Integrações Externas:**
- Serviço de e-mail (Resend/EmailJS/Vercel Forms)
- Google Fonts (Inter)
- CDN da Vercel para assets estáticos

### Estrutura de Arquivos Explicada

```
src/
├── app/
│   ├── layout.tsx          # Layout global com SEO metadata e StructuredData
│   ├── page.tsx            # Página principal (Home) com todas as seções
│   ├── globals.css         # Estilos globais Tailwind + utilitários
│   ├── sitemap.ts          # Geração automática de sitemap.xml
│   └── favicon.ico         # Ícone do site (substituir pelo logo Linka)
│
├── components/
│   ├── StructuredData.tsx  # Schema JSON-LD para SEO (dados estruturados)
│   │                       # Define tipo de negócio, endereço, contatos
│   │
│   ├── sections/           # Componentes de seção da landing page
│   │   ├── Hero.tsx        # Seção inicial com headline e CTA
│   │   ├── About.tsx       # Apresentação da agência
│   │   ├── Services.tsx    # Serviços principais (cards)
│   │   ├── ExtraServices.tsx # Serviços complementares
│   │   ├── Team.tsx        # Foto e apresentação da equipe
│   │   ├── Contact.tsx     # Seção com formulário
│   │   └── Footer.tsx      # Rodapé com informações
│   │
│   ├── forms/
│   │   └── ContactForm.tsx # Formulário de contato com validação
│   │
│   └── ui/                 # Componentes reutilizáveis
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Input.tsx
│
├── lib/                    # Utilitários e helpers
│   └── sendEmail.ts        # Função para integração com serviço de e-mail
│
└── types/                  # TypeScript types
    └── index.ts            # Tipos globais (FormData, Service, etc)

public/
├── robots.txt              # Instruções para crawlers de busca
├── images/
│   ├── og-image.jpg        # Imagem para redes sociais (1200x630px)
│   ├── logo.png            # Logo da Linka Mídia
│   ├── team-photo.jpg      # Foto da equipe
│   └── ...                 # Outras imagens necessárias
│
└── icons/
    ├── favicon.ico         # Ícone do navegador
    └── apple-touch-icon.png # Ícone para iOS (180x180px)
```

**Arquivos Críticos para Configurar:**

1. **`StructuredData.tsx`** - Atualizar com dados reais do cliente:
   - Telefone completo
   - E-mail corporativo
   - URL do Instagram
   - Coordenadas GPS exatas do endereço

2. **`layout.tsx`** - Substituir placeholders:
   - Código do Google Search Console
   - URL final do domínio
   - Descrições otimizadas
   - Caminho correto das imagens OG

3. **`public/images/`** - Adicionar assets necessários:
   - `og-image.jpg` (1200x630px) para compartilhamento redes sociais
   - `logo.png` (alta resolução, fundo transparente)
   - `team-photo.jpg` (foto profissional da equipe)
   - Outras imagens de cases/portfolio

4. **`public/favicon.ico`** - Substituir pelo ícone da Linka

---

## Estrutura de Implantação

### Ambiente de Desenvolvimento

**Como subir localmente:**
```bash
# 1. Clonar repositório
git clone [url-do-repositorio]
cd linka-landing

# 2. Instalar dependências
npm install

# 3. Criar arquivo .env.local (se necessário)
# Exemplo de variáveis para serviço de e-mail:
RESEND_API_KEY=re_xxxxx
CONTACT_EMAIL=contato@linkamedia.com.br

# 4. Rodar em desenvolvimento
npm run dev
# Acessar http://localhost:3000
```

**Docker/Compose disponível?** Não necessário (projeto frontend estático)

**Variáveis de ambiente principais:**
- `RESEND_API_KEY` (ou equivalente do serviço de e-mail escolhido)
- `NEXT_PUBLIC_CONTACT_EMAIL` - E-mail de destino dos formulários
- `NEXT_PUBLIC_GA_ID` (opcional) - Google Analytics ID

### Ambiente de Produção

**URL:** https://linkamedia.com.br (ou subdomínio a definir)

**Estratégia de deploy:**
- Deploy automático via Git (push na branch `main`)
- Preview deployments para branches de feature
- Rollback instantâneo se necessário

**Infraestrutura:** Vercel
- CDN global automático
- SSL/HTTPS automático (Let's Encrypt)
- Edge Network para performance global
- Compressão Brotli/Gzip automática

**Processo de Deploy:**
1. Push para branch `main` → Vercel detecta automaticamente
2. Build automático (`npm run build`)
3. Deploy em CDN global
4. URL de produção atualizada instantaneamente

**Configurações Necessárias na Vercel:**

1. **Criar/Acessar Conta:**
   - Opção A: Criar nova conta para o cliente
   - Opção B: Usar conta existente do cliente
   - Conectar com GitHub/GitLab onde está o repositório

2. **Importar Projeto:**
   - Import Git Repository
   - Selecionar repositório
   - Framework Preset: Next.js (detectado automaticamente)

3. **Configurar Variáveis de Ambiente:**
   ```
   RESEND_API_KEY=re_xxxxx
   NEXT_PUBLIC_CONTACT_EMAIL=contato@linkamedia.com.br
   ```

4. **Configurar Domínio Customizado:**
   - **Se cliente tem domínio existente:**
     - Adicionar domínio no Vercel
     - Vercel fornecerá registros DNS
     - Configurar no provedor do domínio:
       - Type: A, Name: @, Value: 76.76.21.21
       - Type: CNAME, Name: www, Value: cname.vercel-dns.com
     - Aguardar propagação (até 48h, geralmente minutos)
   
   - **Se comprar domínio novo:**
     - Registro.br, GoDaddy, ou Vercel Domains
     - Configurar DNS conforme acima
     - Configurar caixa de e-mail separadamente

5. **E-mail Corporativo:**
   - **Se domínio já tem e-mail:** Preservar configurações MX existentes
   - **Se domínio novo:**
     - Opção 1: Google Workspace (R$ 30-40/usuário/mês)
     - Opção 2: Zoho Mail (plano gratuito disponível)
     - Opção 3: Titan Email (~R$ 15/mês)
     - Configurar registros MX conforme provedor escolhido

**Ferramentas de observabilidade:**
- Vercel Analytics (integrado)
- Vercel Speed Insights (opcional)
- Google Search Console (para monitorar SEO)

### Diagrama de Implantação

```
┌─────────────────┐
│   Usuário       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Vercel CDN     │ ◄── SSL/HTTPS automático
│  (Edge Network) │ ◄── Cache de assets
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Next.js Static │
│  Site (HTML/CSS)│
└────────┬────────┘
         │
         │ (Submit formulário)
         ▼
┌─────────────────┐
│ Resend/EmailJS  │ ──► E-mail para
│   API           │     contato@linkamedia.com.br
└─────────────────┘
```

---

## Considerações de Segurança

**Políticas de CORS:**
- Não aplicável (site estático servido pelo mesmo domínio)
- API de e-mail: CORS configurado pelo serviço terceiro

**Proteção de dados sensíveis:**
- Formulário não armazena dados (apenas envia por e-mail)
- Validação client-side para prevenir inputs maliciosos
- Rate limiting do serviço de e-mail previne spam
- HTTPS obrigatório (SSL da Vercel)

**Gestão de segredos:**
- API keys armazenadas como variáveis de ambiente na Vercel
- Nunca commitar `.env.local` no Git (já no `.gitignore`)
- Rotacionar API keys se comprometidas

**Autenticação e autorização:**
- Não aplicável (site público)
- Nenhuma área administrativa

**Proteção contra spam:**
- Implementar honeypot field no formulário
- Validação robusta de campos obrigatórios
- Considerar Google reCAPTCHA v3 se spam se tornar problema

**Headers de Segurança:**
- Configurados automaticamente pela Vercel:
  - X-Frame-Options: DENY
  - X-Content-Type-Options: nosniff
  - Referrer-Policy: origin-when-cross-origin

---

## Checklist de Pré-Deploy

### Assets e Conteúdo
- [ ] Logo da Linka Mídia em alta resolução
- [ ] Foto profissional da equipe
- [ ] Imagem OG (1200x630px) para redes sociais
- [ ] Favicon e apple-touch-icon
- [ ] Conteúdos textuais finalizados (headlines, descrições)

### Configurações Técnicas
- [ ] Atualizar `StructuredData.tsx` com dados reais
- [ ] Atualizar `layout.tsx` com URLs e meta tags corretas
- [ ] Configurar serviço de e-mail (Resend/EmailJS)
- [ ] Testar formulário de contato em desenvolvimento
- [ ] Validar responsividade em todos os breakpoints
- [ ] Otimizar imagens (WebP, compressão)

### SEO
- [ ] Verificar meta descriptions únicas
- [ ] Validar sitemap.xml
- [ ] Verificar robots.txt
- [ ] Testar dados estruturados (Google Rich Results Test)
- [ ] Lighthouse audit (score > 90 em todas métricas)

### Deploy
- [ ] Criar/acessar conta Vercel
- [ ] Conectar repositório Git
- [ ] Configurar variáveis de ambiente
- [ ] Fazer deploy de teste
- [ ] Configurar domínio customizado
- [ ] Verificar SSL ativo
- [ ] Testar formulário em produção
- [ ] Adicionar site no Google Search Console

### Pós-Deploy
- [ ] Compartilhar credenciais Vercel com cliente
- [ ] Documentar processo de atualização de conteúdo
- [ ] Configurar alertas de uptime (opcional)
- [ ] Treinar cliente (se necessário)

---

## Manutenção e Atualizações Futuras

**Como atualizar conteúdo:**
1. Editar arquivos necessários no código
2. Commit e push para branch `main`
3. Vercel faz deploy automático em ~2 minutos

**Atualizações comuns:**
- Textos: editar componentes em `src/components/sections/`
- Imagens: substituir arquivos em `public/images/`
- Informações de contato: atualizar `StructuredData.tsx` e componentes

**Dependências:**
- Atualizar dependências mensalmente: `npm update`
- Verificar breaking changes do Next.js
- Manter Framer Motion atualizado para novos recursos

---

## Recursos e Documentação

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Docs](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Resend Documentation](https://resend.com/docs)
- [Schema.org Reference](https://schema.org/AdvertisingAgency)