function SignatureTable({ users }) {
  const signedUsers = users.filter((user) => user.signed);

  if (signedUsers.length === 0) {
    return null;
  }

  return (
    <div className="mt-8" id="signatures-table" data-id="nvl2ae1fq" data-path="components/SignatureTable.js">
      <h2 className="text-xl font-bold text-gray-800 mb-4" data-id="7ec56hux0" data-path="components/SignatureTable.js">Assinaturas</h2>
      <div className="overflow-x-auto" data-id="r2ntkax0q" data-path="components/SignatureTable.js">
        <table className="min-w-full divide-y divide-gray-200" data-id="vns82kbvi" data-path="components/SignatureTable.js">
          <thead className="bg-gray-50" data-id="ke6d3s5f8" data-path="components/SignatureTable.js">
            <tr data-id="rhqtvnbr5" data-path="components/SignatureTable.js">
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="j6idick97" data-path="components/SignatureTable.js">
                Nome Completo
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="e1wnqac80" data-path="components/SignatureTable.js">
                Data de Assinatura
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="jdhs0u9th" data-path="components/SignatureTable.js">
                Turno
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" data-id="hssmduc1v" data-path="components/SignatureTable.js">
                Assinatura
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200" data-id="ezs7xv6yl" data-path="components/SignatureTable.js">
            {signedUsers.map((user) =>
            <tr key={user.id} data-id="zo0wh82rv" data-path="components/SignatureTable.js">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" data-id="hpjn3o5e7" data-path="components/SignatureTable.js">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" data-id="n4i5iud30" data-path="components/SignatureTable.js">
                  {user.signatureDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" data-id="i6g139ilk" data-path="components/SignatureTable.js">
                  {user.turno}
                </td>
                <td className="px-6 py-4 whitespace-nowrap" data-id="duu47wo4h" data-path="components/SignatureTable.js">
                  <img
                  src={user.signatureData}
                  alt={`Assinatura de ${user.name}`}
                  className="h-12 max-w-[200px] object-contain" data-id="ff91xrsjz" data-path="components/SignatureTable.js" />

                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>);

}