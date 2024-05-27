Hooks.once('init', () => {
  console.log(`${game.modules.get('test-module').data.title} | Initializing`);
});

Hooks.on('ready', () => {
  console.log(`${game.modules.get('test-module').data.title} | Ready`);
});
