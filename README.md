# 🏃‍♂️ RunCoach Pro - Sistema de Gerenciamento de Treinos de Corrida

Uma plataforma completa para treinadores de corrida gerenciarem alunos, criarem treinos personalizados e acompanharem resultados de forma eficiente.

## 🚀 Funcionalidades Principais

### 👥 **Gestão de Alunos**
- Perfis detalhados com histórico completo
- Avaliações físicas e anamnese
- Acompanhamento de métricas (VO2 Max, zonas de treino)
- Controle de progresso individual

### 🎯 **Treinos Personalizados**
- Criação de treinos específicos para cada aluno
- Diversos tipos de treino (Base, Intervalado, Tempo Run, Long Run)
- Instruções detalhadas e controle de progressão
- Biblioteca de exercícios e planos de treino

### 📊 **Métricas e Relatórios**
- Dashboard com analytics em tempo real
- Gráficos de evolução e performance
- Relatórios detalhados de progresso
- Análise de engajamento dos alunos

### 📅 **Agenda Integrada**
- Agendamento online de aulas e sessões
- Lembretes automáticos
- Gestão de aulas em grupo
- Calendário de provas e eventos

### 💬 **Comunicação Direta**
- Sistema de mensagens em tempo real
- Notificações push
- Feedback dos treinos
- Chat integrado

### 💰 **Gestão Financeira**
- Controle de pagamentos e mensalidades
- Relatórios financeiros
- Lembretes automáticos de cobrança
- Dashboard financeiro

### 🌐 **Integrações**
- Strava API
- Garmin Connect
- Zeblaze e outros wearables
- Sincronização automática de dados

### 📱 **PWA (Progressive Web App)**
- Funciona offline
- Instalável em dispositivos móveis
- Notificações push nativas
- Performance otimizada

### 🏆 **Rede Social Integrada**
- Feed de atividades dos alunos
- Compartilhamento de fotos de treinos
- Sistema de comentários e curtidas
- Gamificação com badges e conquistas

## 🎭 Perfis de Usuário

### 🛡️ **SuperAdmin**
- Criar e gerenciar admins
- Criar espaços de assessorias
- Relatórios globais do sistema
- Configurações avançadas

### 👨‍🏫 **Admin/Treinador**
- Gerenciar alunos e treinos
- Criar e acompanhar métricas
- Realizar anamnese e avaliações
- Criar enquetes e cadastrar provas
- Gestão financeira da assessoria

### 🏃‍♂️ **Aluno**
- Visualizar treinos personalizados
- Acompanhar progresso pessoal
- Participar da rede social
- Comunicação com treinador
- Sincronizar dados de dispositivos

## 🛠️ Tecnologias Utilizadas

### **Frontend**
- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Biblioteca de componentes
- **Lucide React** - Ícones modernos

### **Backend & Database**
- **Next.js API Routes** - Backend integrado
- **Supabase** - Database PostgreSQL e autenticação
- **Prisma** - ORM para database
- **Vercel** - Deploy e hosting

### **Integrações**
- **Strava API** - Sincronização de atividades
- **Garmin Connect IQ** - Dados de dispositivos
- **Pusher** - Real-time messaging
- **Stripe** - Processamento de pagamentos

### **PWA & Mobile**
- **Service Workers** - Cache e offline
- **Web Push API** - Notificações
- **Workbox** - PWA toolkit

## 📁 Estrutura do Projeto

\`\`\`
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── dashboard/
│   │   ├── students/
│   │   ├── workouts/
│   │   ├── messages/
│   │   ├── billing/
│   │   └── integrations/
│   ├── student/
│   ├── superadmin/
│   └── api/
├── components/
│   ├── ui/
│   ├── dashboard/
│   ├── auth/
│   └── shared/
├── lib/
├── hooks/
├── types/
└── public/
\`\`\`

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Conta no Supabase
- Conta no Vercel (opcional)

### Instalação

1. **Clone o repositório**
\`\`\`bash
git clone https://github.com/seu-usuario/runcoach-pro.git
cd runcoach-pro
\`\`\`

2. **Instale as dependências**
\`\`\`bash
npm install
\`\`\`

3. **Configure as variáveis de ambiente**
\`\`\`bash
cp .env.example .env.local
\`\`\`

Edite o arquivo `.env.local` com suas credenciais:
\`\`\`env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=sua_url_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima
SUPABASE_SERVICE_ROLE_KEY=sua_chave_service_role

# Strava API
STRAVA_CLIENT_ID=seu_client_id
STRAVA_CLIENT_SECRET=seu_client_secret

# Stripe
STRIPE_PUBLISHABLE_KEY=sua_chave_publica
STRIPE_SECRET_KEY=sua_chave_secreta

# Pusher (Chat)
PUSHER_APP_ID=seu_app_id
PUSHER_KEY=sua_chave
PUSHER_SECRET=seu_secret
PUSHER_CLUSTER=seu_cluster
\`\`\`

4. **Execute o projeto**
\`\`\`bash
npm run dev
\`\`\`

5. **Acesse no navegador**
\`\`\`
http://localhost:3000
\`\`\`

## 👤 Usuários de Teste

### SuperAdmin
- **Email:** superadmin@runcoach.com
- **Senha:** super123
- **Acesso:** Controle total do sistema

### Treinador/Admin
- **Email:** treinador@runcoach.com
- **Senha:** treino123
- **Acesso:** Gestão de alunos e treinos

### Aluno
- **Email:** aluno@runcoach.com
- **Senha:** aluno123
- **Acesso:** Visualização de treinos e rede social

## 📱 PWA - Instalação

1. Acesse o site no navegador móvel
2. Toque no menu do navegador
3. Selecione "Adicionar à tela inicial"
4. Confirme a instalação

## 🔗 APIs e Integrações

### Strava
- Sincronização automática de atividades
- Importação de métricas de performance
- Compartilhamento de treinos

### Garmin
- Dados de frequência cardíaca
- Métricas avançadas de corrida
- Sincronização de dispositivos

### Stripe
- Processamento de pagamentos
- Gestão de assinaturas
- Relatórios financeiros

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

- **Email:** suporte@runcoach.com
- **WhatsApp:** (11) 99999-9999
- **Discord:** [RunCoach Community](https://discord.gg/runcoach)

## 🎯 Roadmap

- [ ] Integração com Apple Health
- [ ] App mobile nativo (React Native)
- [ ] IA para sugestão de treinos
- [ ] Marketplace de planos de treino
- [ ] Integração com nutricionistas
- [ ] Sistema de certificações

---

**Desenvolvido com ❤️ para a comunidade de corrida brasileira**
