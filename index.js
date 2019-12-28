module.exports = function(){
    var methods = {};
    var PluginLoaded = require("PluginLoaded");
    PluginLoaded("Vault", function(){
        var Vault = manager.loadExternal(manager.getPluginFile("Vault"));
        
        //Economy
        var economy = Vault.loadClass("net.milkbowl.vault.economy.Economy");
        var economy_rsp = server.getServicesManager().getRegistration(economy);
        if(economy_rsp == null){
            methods.economy = ()=> null;
        } else {
            methods.economy = ()=> economy_rsp.getProvider();
        }

        //Permission
        var permission = Vault.loadClass("net.milkbowl.vault.permission.Permission");
        var permission_rsp = server.getServicesManager().getRegistration(permission);
        if(permission_rsp == null){
            methods.permission = ()=> null;
        } else {
            methods.permission = ()=> permission_rsp.getProvider();
        }

        //Chat
        var chat = Vault.loadClass("net.milkbowl.vault.chat.Chat");
        var chat_rsp = server.getServicesManager().getRegistration(chat);
        if(chat_rsp == null){
            methods.chat = ()=> null;
        } else {
            methods.chat = ()=> chat_rsp.getProvider();
        }

        

    });
    return methods;
}
