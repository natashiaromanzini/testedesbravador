repositório referente ao teste para analista de testes.

Foi utilizado cypress para fazer a automação dos testes

Primeiramente foi testado no arquvivo testePGdisp dentro da pasta testes automatizados/testes, se a página estava ativa, ou fora do ar, verificando que passou no teste referente ao cypress visitar a url

o segundo teste foi testar fazer uma reserva como esta no arquivo testereerva na pasta testes automatizados/testes com as seguintes informações:

2. Verificar a disponibilidade de reserva para no mínimo 03 dias
3. Selecionar o quarto STANDARD ST1
4. Adicionar na reserva 02 Adultos e 01 criança até 05 anos
5. Informar os hospedes da reserva
6. Efetuar pagamento com cartão de crédito descrito abaixo. NUMERO: 4000 0000 0000 0044
NOME: DESBRAVADOR SOFTWARE
VALIDADE: 12/23
CVC: 123.

Na implantação do teste como o site possui captcha foi adicionado um tempo para poder fazer as confirmações do captcha que passou com sucesso e mostrou a disponibilidade da categoria no periodo seleconado do dia 20 ao 23.

Logo após foi selecionado a categoria indicada, porém como para alterar a quantidade de pax criança e pax adulto foi necessário excluir o que foi selecionado, alterar as quantidades e selecionar novamente a categoria, pois ao fazer a alteração da quantidade de paxs depois de selecionado a categoria, a informação do que foi selecionado não é alterado.

Após selecionar a categoria com as quantiadades de pax corretas, foi clicado para continuar, clicado em hóspedes para adicionar os hóspedes, preenchido as informações conforme solicitadas e clicado em salvar.

Após salvar as informações dos hóspedes foi clicado em continuar novamente que levou a parte de pagamento, que preencheu corretamente conforme os elementos selecionados, porém como o cartão passou da validade, o mesmo não deixou fnalizar a reserva.

Na parte de pagamento foi necessário a utilização de um tempo para poder selecionar o captcha também, pois pelo cypress não foi possivel clicar no captcha e fazer as confirmações.

Os outros teste estão nos arquvos na pasta testes, os arquivos cenario 1, cenario 2, cenario 3 e cenario 1.
