module.exports = {
  managerEntries: (entry = []) => {
    return [...entry, require.resolve('@styled/storybook-dark-mode/register')];
  }
};
