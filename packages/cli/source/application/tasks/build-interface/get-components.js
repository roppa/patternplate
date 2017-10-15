export default getComponents;

function getComponents(datasets, automount) {
  return automount
    ? datasets
    : datasets.filter(dataset => {
        const manifest = dataset.manifest;
        const options = manifest.options;
        if (!options) {
          return false;
        }
        const opts = options["react-to-markup"]
          ? options["react-to-markup"].opts
          : {};
        return opts.automount;
      });
}
