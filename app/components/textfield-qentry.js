import Component from '@ember/component';
import $ from 'jquery';
import { inject as service } from '@ember/service';

export default Component.extend({
    cart: service('shopping-cart'),
     actions: {
        //this actions get the name from the text field
        send: function () {
           //document.write('Name is: ' + this.get('itemToBeAdded'));
           let itemName = this.get('itemToBeAdded');
           this.get('cart').add(itemName);
           var textFiled = $("#input");

           
            textFiled.val("");
           //alert(itemName);
           
        },
        remove(item) {
            this.get('cart').remove(item);
          },
        clear(){
              this.get('cart').empty();
          }
     }

});
