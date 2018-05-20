(function (win, doc) {  
    var EntityDecoder = function() {
        this.dummy_element = doc.createElement('div');
        this.match = new RegExp('&\w|\d*;')
    }
    EntityDecoder.prototype.decode = function (entity) {
        var self = this;
        if (!self.match.test(entity))
            entity = '&' + entity + ';';
        self.dummy_element.innerHTML = entity;
        return self.dummy_element.innerText;
    }
    win.EntityDecoder = new EntityDecoder ();
})(window, document)