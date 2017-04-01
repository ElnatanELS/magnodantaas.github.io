app.service('MainService', function(JsonFactory){
  this.orcamentos = [];
  this.getCurriculo = function(){
    return JsonFactory.get();
  };
});
