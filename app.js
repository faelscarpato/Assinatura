function App() {
  const [selectedUser, setSelectedUser] = React.useState(null);
  const [users, setUsers] = React.useState([
  { id: 1, name: 'João Silva', turno: 'Manhã', signed: false, signatureData: null, signatureDate: null },
  { id: 2, name: 'Maria Oliveira', turno: 'Tarde', signed: false, signatureData: null, signatureDate: null },
  { id: 3, name: 'Carlos Santos', turno: 'Noite', signed: false, signatureData: null, signatureDate: null },
  { id: 4, name: 'Ana Costa', turno: 'Manhã', signed: false, signatureData: null, signatureDate: null },
  { id: 5, name: 'Paulo Rodrigues', turno: 'Tarde', signed: false, signatureData: null, signatureDate: null }]
  );
  const [searchTerm, setSearchTerm] = React.useState('');
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');

  const filteredUsers = users.filter((user) =>
  user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  user.turno.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSignature = (signatureData) => {
    if (!selectedUser) {
      setError('Por favor, selecione um usuário para assinar');
      return;
    }

    const newUsers = users.map((user) => {
      if (user.id === selectedUser.id) {
        return {
          ...user,
          signed: true,
          signatureData: signatureData,
          signatureDate: new Date().toLocaleDateString('pt-BR')
        };
      }
      return user;
    });

    setUsers(newUsers);
    setSuccess(`${selectedUser.name} assinou com sucesso!`);
    setSelectedUser(null);

    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccess('');
    }, 3000);
  };

  const allSigned = users.every((user) => user.signed);

  return (
    <div className="page-container bg-gray-50" data-id="uqtwomc6m" data-path="app.js">
      <Navbar data-id="rk35jtghi" data-path="app.js" />
      
      <div className="container mx-auto px-4 py-6" data-id="flilvmtph" data-path="app.js">
        <div className="contract-container p-6" data-id="89z8hdfeq" data-path="app.js">
          {error &&
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert" data-id="w0ghiv1jt" data-path="app.js">
              <p data-id="6zskmw2fh" data-path="app.js">{error}</p>
            </div>
          }
          
          {success &&
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert" data-id="rs71tznu1" data-path="app.js">
              <p data-id="l43t57qdo" data-path="app.js">{success}</p>
            </div>
          }
          
          <UserSelector
            users={filteredUsers}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm} data-id="brpichlo2" data-path="app.js" />

          
          <ContractText data-id="cucbqqziw" data-path="app.js" />
          
          {selectedUser && !selectedUser.signed &&
          <div className="mt-8" data-id="8y8rh4b0m" data-path="app.js">
              <h3 className="text-lg font-semibold mb-2" data-id="xhi78afa0" data-path="app.js">Assinatura para: {selectedUser.name}</h3>
              <SignatureCanvas onSave={handleSignature} data-id="8hrjqc2vb" data-path="app.js" />
            </div>
          }
          
          <SignatureTable users={users} data-id="w0yjcomu4" data-path="app.js" />
          
          <ExportButton enabled={allSigned} contractText={contractText} signatures={users} data-id="f6a11v0f5" data-path="app.js" />
        </div>
      </div>
    </div>);

}

// Sample contract text
const contractText = `
CONTRATO DE PRESTAÇÃO DE SERVIÇOS

Pelo presente instrumento particular de Contrato de Prestação de Serviços, as partes abaixo qualificadas:

CONTRATANTE: [Nome da Empresa], pessoa jurídica de direito privado, inscrita no CNPJ sob o nº XX.XXX.XXX/0001-XX, com sede na [Endereço completo], neste ato representada por seu representante legal, Sr(a). [Nome do Representante], [nacionalidade], [estado civil], [profissão], portador(a) da Cédula de Identidade RG nº [número do RG] e inscrito(a) no CPF sob o nº [número do CPF], doravante denominada CONTRATANTE;

CONTRATADA: [Nome da Empresa Contratada], pessoa jurídica de direito privado, inscrita no CNPJ sob o nº XX.XXX.XXX/0001-XX, com sede na [Endereço completo], neste ato representada por seu representante legal, Sr(a). [Nome do Representante], [nacionalidade], [estado civil], [profissão], portador(a) da Cédula de Identidade RG nº [número do RG] e inscrito(a) no CPF sob o nº [número do CPF], doravante denominada CONTRATADA;

As partes acima identificadas têm, entre si, justo e acertado o presente Contrato de Prestação de Serviços, que se regerá pelas cláusulas e condições a seguir estabelecidas.

CLÁUSULA PRIMEIRA - DO OBJETO

O presente contrato tem por objeto a prestação de serviços de [descrição dos serviços] pela CONTRATADA à CONTRATANTE, conforme especificações técnicas detalhadas no Anexo I, que é parte integrante deste contrato.

CLÁUSULA SEGUNDA - DO PREÇO E FORMA DE PAGAMENTO

Pela execução dos serviços, a CONTRATANTE pagará à CONTRATADA o valor total de R$ [valor em números] ([valor por extenso]), a ser pago da seguinte forma: [descrever condições de pagamento].

CLÁUSULA TERCEIRA - DO PRAZO DE VIGÊNCIA

O presente contrato terá vigência de [período de vigência], iniciando-se na data de sua assinatura e terminando em [data de término].

CLÁUSULA QUARTA - DAS OBRIGAÇÕES DA CONTRATADA

São obrigações da CONTRATADA:
a) Executar os serviços conforme especificações do Anexo I;
b) Utilizar profissionais habilitados e com conhecimentos específicos dos serviços a serem executados;
c) Manter sigilo sobre todas as informações a que tiver acesso em decorrência da prestação dos serviços;
d) [outras obrigações específicas].

CLÁUSULA QUINTA - DAS OBRIGAÇÕES DA CONTRATANTE

São obrigações da CONTRATANTE:
a) Efetuar o pagamento conforme estipulado na Cláusula Segunda;
b) Fornecer à CONTRATADA todas as informações necessárias à execução dos serviços;
c) [outras obrigações específicas].

CLÁUSULA SEXTA - DA RESCISÃO

O presente contrato poderá ser rescindido por qualquer das partes, mediante notificação expressa, com antecedência mínima de [prazo] dias.

CLÁUSULA SÉTIMA - DO FORO

As partes elegem o foro da Comarca de [Cidade/Estado] para dirimir quaisquer dúvidas ou controvérsias oriundas do presente contrato, com renúncia expressa a qualquer outro, por mais privilegiado que seja.

E, por estarem assim justas e contratadas, as partes assinam o presente instrumento em duas vias de igual teor e forma, na presença das testemunhas abaixo assinadas.

[Local e Data]
`;

ReactDOM.render(<App data-id="i67yi14ku" data-path="app.js" />, document.getElementById('root'));