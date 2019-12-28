Interact with the Vault api through Drupi!

# Usage
### 1. Require vault
```js
var vault = require("Vault")();
```

### 2. Getting vault providers
```js
var vault = require("Vault")();
var economy = vault.economy(); //http://milkbowl.github.io/VaultAPI/net/milkbowl/vault/economy/Economy.html
var permission = vault.permission(); //http://milkbowl.github.io/VaultAPI/net/milkbowl/vault/permission/Permission.html
var chat = vault.chat(); //http://milkbowl.github.io/VaultAPI/net/milkbowl/vault/chat/Chat.html
```

#Example
### Get Player's balance
```js
var vault = require("Vault")();

command.create("balance", "money", "Check your balance", (sender, args) => {
    var player = cast.asPlayer(sender);
    var bal = vault.economy().getBalance(player)
    player.sendMessage("Balance: $" + bal);
});
```
