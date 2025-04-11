function UserSelector({ users, selectedUser, setSelectedUser, searchTerm, setSearchTerm }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleUserSelection = (user) => {
    if (user.signed) {
      return; // Prevent selecting already signed users
    }
    setSelectedUser(user);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-8" data-id="0aid3onnk" data-path="components/UserSelector.js">
      <h2 className="text-xl font-bold text-gray-800 mb-4" data-id="83jdpcpew" data-path="components/UserSelector.js">Selecione o Signatário</h2>
      
      <div className="relative" data-id="oveeyi45e" data-path="components/UserSelector.js">
        <div className="flex mb-2" data-id="k455azlsm" data-path="components/UserSelector.js">
          <div className="relative flex-grow" data-id="3t7uejnvv" data-path="components/UserSelector.js">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3" data-id="mly1lx0c7" data-path="components/UserSelector.js">
              <i className="fas fa-search text-gray-400" data-id="j56z96b4e" data-path="components/UserSelector.js"></i>
            </span>
            <input
              type="text"
              className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Buscar por nome ou turno..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onClick={() => setIsOpen(true)} data-id="g7069lb7i" data-path="components/UserSelector.js" />

          </div>
          <button
            className="ml-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none flex items-center"
            onClick={toggleDropdown} data-id="l6g1rvhj2" data-path="components/UserSelector.js">

            <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} mr-1`} data-id="lg64efc8b" data-path="components/UserSelector.js"></i>
            {selectedUser ? selectedUser.name : 'Selecionar'}
          </button>
        </div>
        
        {isOpen &&
        <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg" data-id="2dyav3irf" data-path="components/UserSelector.js">
            <ul className="max-h-60 rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm" data-id="q5srw6vxv" data-path="components/UserSelector.js">
              {users.length > 0 ?
            users.map((user) =>
            <li
              key={user.id}
              className={`cursor-pointer select-none relative py-2 pl-3 pr-9 ${
              user.signed ? 'text-gray-400' : 'text-gray-900 hover:bg-indigo-50'}`
              }
              onClick={() => handleUserSelection(user)} data-id="5gaygbc8s" data-path="components/UserSelector.js">

                    <div className="flex items-center justify-between" data-id="5jubgma8r" data-path="components/UserSelector.js">
                      <div data-id="untmglbvy" data-path="components/UserSelector.js">
                        <span className="block truncate font-medium" data-id="lqoscxlgj" data-path="components/UserSelector.js">{user.name}</span>
                        <span className="block truncate text-sm text-gray-500" data-id="fognxfv8q" data-path="components/UserSelector.js">Turno: {user.turno}</span>
                      </div>
                      {user.signed &&
                <span className="text-green-500 ml-2" data-id="90m8ufo4k" data-path="components/UserSelector.js">
                          <i className="fas fa-check-circle" data-id="71fp2slbd" data-path="components/UserSelector.js"></i> Assinado
                        </span>
                }
                    </div>
                  </li>
            ) :

            <li className="cursor-default select-none relative py-2 pl-3 pr-9 text-gray-700" data-id="lw9vtqaew" data-path="components/UserSelector.js">
                  Nenhum usuário encontrado
                </li>
            }
            </ul>
          </div>
        }
      </div>
      
      {selectedUser &&
      <div className="mt-2 p-3 bg-blue-50 rounded-md flex items-center" data-id="t0kmk9uy5" data-path="components/UserSelector.js">
          <i className="fas fa-user-edit text-blue-500 mr-2" data-id="p2ixmmwfy" data-path="components/UserSelector.js"></i>
          <div data-id="s4cgbkshl" data-path="components/UserSelector.js">
            <p className="font-medium text-blue-800" data-id="wwg49gtu6" data-path="components/UserSelector.js">Pronto para assinar: {selectedUser.name}</p>
            <p className="text-sm text-blue-600" data-id="t3z0mkys8" data-path="components/UserSelector.js">Turno: {selectedUser.turno}</p>
          </div>
        </div>
      }
    </div>);

}