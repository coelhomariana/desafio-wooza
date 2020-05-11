# Desafio Wooza

## Stack
Esse é um projeto de Frontend Web feito utilizando ReactJS, HTML, CSS, Material-UI e Axios; Como gerenciador de pacotes do NodeJS o npm.
Sobre a divisão dos arquivos, há dois grandes setores. A pasta `components` contém o componente principal (PlatformCard: cartão de plataformas). Os demais componentes (PlanCard: cartão de planos, botões, campos de texto, barra de carregamento) foram importados do framework Material-UI .

 Já a pasta `containers` abriga as páginas em si e podem ser pensadas como a união com os componentes, para serem mostradas na tela. 

## Sobre
O projeto consiste em uma página de três telas que permite que o usuário selecione a plataforma para qual deseja adquirir um plano. Na segunda tela, esses planos podem ser selecionados. As plataformas e os planos são renderizados de acordo com a API fornecida. Todos os dados selecionados e digitados são impressos no console.

## Instruções para rodar
Por ser um projeto com ReactJS, há a necessidade do NodeJS. 
Biaxando ou clonando o repositório git, terá em sua máquina os arquivos necessários.

Depois disso, basta abrir o terminal, navegar até o repositório clonado e rodar:
1. `npm install` para instalar todas as dependências;
1. `npm run start` para rodar localmente o projeto

# Próximas features
- Testes com Jest e Enzyme
- Validação de cpf/email
- Melhorar estilos

## Contato
Mariana Coelho de Carvalho
coelhomariana@outlook.com / marianacoelhoneg@gmail.com
