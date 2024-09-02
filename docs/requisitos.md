# Requisitos do Sistema

## Requisitos Funcionais

1. **Cadastro de Produtores, Consumidores e Cooperativas**  
   O sistema deve permitir o cadastro de produtores locais, consumidores e cooperativas responsáveis pelo frete.

2. **Catálogo de Produtos**  
   Produtores devem poder cadastrar, editar e remover produtos, incluindo detalhes como nome, descrição, preço, disponibilidade e imagens.

3. **Gestão de Pedidos**  
   O consumidor deve poder selecionar produtos, adicioná-los ao carrinho e realizar pedidos. O sistema deve gerar um resumo do pedido e calcular o custo total, incluindo o frete.

4. **Cálculo de Frete**  
   O sistema deve calcular o frete com base na distância entre o ponto de distribuição da cooperativa e o consumidor, utilizando a cooperativa como intermediário para o transporte.

5. **Opção de Cestas Semanais**  
   O sistema deve oferecer a opção de assinatura de cestas semanais de produtos, permitindo ao consumidor escolher entre pagamento semanal ou mensal, além de selecionar quais produtos deseja ou não receber nas cestas.

6. **Gestão de Pagamentos**  
   O sistema deve processar pagamentos online, dividindo o pagamento entre o produtor, a cooperativa e as taxas da plataforma.

7. **Agendamento de Entregas**  
   O consumidor deve poder agendar a entrega dos produtos em datas e horários específicos, conforme a disponibilidade da cooperativa.

8. **Notificações**  
   O sistema deve enviar notificações aos consumidores sobre a confirmação de pedidos, status da entrega e renovação de assinaturas de cestas.

9. **Avaliações e Feedback**  
   O consumidor deve poder avaliar produtos, produtores e a cooperativa de frete, ajudando a manter a qualidade e a transparência.

10. **Relatórios e Análises**  
    O sistema deve gerar relatórios para produtores e cooperativas sobre vendas, entregas realizadas e feedback dos consumidores.

11. **Login e Autenticação**  
    O sistema deve implementar um mecanismo de login e autenticação seguro, permitindo que os usuários se registrem, façam login e acessem suas contas pessoais. O processo de autenticação deve incluir verificação de credenciais, como nome de usuário e senha, e pode oferecer opções adicionais, como autenticação em duas etapas, para garantir que apenas usuários autorizados acessem o aplicativo.

## Requisitos Não Funcionais

1. **Usabilidade**  
   A interface do sistema deve ser intuitiva e fácil de usar, garantindo que usuários com diferentes níveis de familiaridade com tecnologia possam utilizá-lo sem dificuldades.

2. **Desempenho**  
   O sistema deve ser capaz de processar múltiplos pedidos simultâneos sem comprometer a performance, garantindo um tempo de resposta rápido para as interações do usuário.

3. **Escalabilidade**  
   O sistema deve ser escalável para acomodar um crescimento no número de usuários e pedidos, assim como a expansão para novas regiões e mercados.

4. **Segurança**  
   O sistema deve implementar criptografia de dados e autenticação segura, assegurando a confidencialidade e integridade das transações e informações dos usuários.

5. **Compatibilidade**  
   O sistema deve ser compatível com diferentes dispositivos, incluindo Android e iOS.

6. **Manutenibilidade**  
   O código do sistema deve ser modular e bem documentado, permitindo futuras manutenções e expansões de forma eficiente.

7. **Conformidade**  
   O sistema deve estar em conformidade com as regulamentações locais de proteção de dados e comércio eletrônico, como a LGPD.

8. **Desenvolvimento com React Native**  
   O sistema deve ser desenvolvido utilizando React Native para garantir uma base de código unificada entre as plataformas. Essa escolha permite acelerar o desenvolvimento, reduzir custos e garantir atualizações mais rápidas, além de proporcionar uma experiência de usuário fluida e responsiva.

9. **Hospedagem na Vercel**  
   O sistema deve ser hospedado na Vercel para aproveitar sua infraestrutura otimizada para aplicações front-end e back-end, garantindo alto desempenho, escalabilidade automática e facilidade de implantação contínua. A Vercel também oferece suporte robusto para Next.js, simplificando o desenvolvimento de um backoffice para o cadastro de registros e ferramentas utilizadas pelos usuários.

10. **Acessibilidade**  
    O sistema deve ser desenvolvido seguindo as melhores práticas de acessibilidade, conforme as diretrizes WCAG, para garantir que seja utilizável por pessoas com deficiências, incluindo suporte para leitores de tela e navegação por teclado.
