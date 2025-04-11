// Utility functions for data management

// Save data to local storage
function saveData(key, data) {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
    return true;
  } catch (error) {
    console.error(`Error saving data for key ${key}:`, error);
    return false;
  }
}

// Load data from local storage
function loadData(key, defaultValue = null) {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) {
      return defaultValue;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.error(`Error loading data for key ${key}:`, error);
    return defaultValue;
  }
}

// Get a sample list of users (for demo purposes)
function getSampleUsers() {
  // Check if we have users in local storage
  const savedUsers = loadData('contract_users');
  if (savedUsers && savedUsers.length > 0) {
    return savedUsers;
  }

  // Default sample data
  return [
  { id: 1, name: 'João Silva', turno: 'Manhã', signed: false, signatureData: null, signatureDate: null },
  { id: 2, name: 'Maria Oliveira', turno: 'Tarde', signed: false, signatureData: null, signatureDate: null },
  { id: 3, name: 'Carlos Santos', turno: 'Noite', signed: false, signatureData: null, signatureDate: null },
  { id: 4, name: 'Ana Costa', turno: 'Manhã', signed: false, signatureData: null, signatureDate: null },
  { id: 5, name: 'Paulo Rodrigues', turno: 'Tarde', signed: false, signatureData: null, signatureDate: null }];

}

// Save the current contract state (users and signatures)
function saveContractState(users, contractText) {
  const contractState = {
    users,
    contractText,
    lastUpdated: new Date().toISOString()
  };

  return saveData('contract_state', contractState);
}

// Load the current contract state
function loadContractState() {
  return loadData('contract_state', { users: getSampleUsers(), contractText: '', lastUpdated: null });
}

// Reset the contract state (clear all signatures)
function resetContractState(contractText) {
  const users = getSampleUsers().map((user) => ({
    ...user,
    signed: false,
    signatureData: null,
    signatureDate: null
  }));

  const contractState = {
    users,
    contractText,
    lastUpdated: new Date().toISOString()
  };

  return saveData('contract_state', contractState);
}

// Check if all users have signed
function allUsersSigned(users) {
  return users.every((user) => user.signed);
}