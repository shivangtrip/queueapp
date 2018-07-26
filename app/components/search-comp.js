import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    cart: service('shopping-cart'),
    binu: service('search-cart'),
    actions: {
        search(item){
            //console.log('inside search..');
            let itemName = this.get('itemToBeSearched');
            let precart = this.get('cart').items;
            let filtered = precart.filter(function checkItem(item)
        {
                return item.includes(itemName);
        })  ;
        this.set('binu.items', filtered);
        //this.set(this.get('binu').items, filtered);
        //this.get('binu').items = filtered;
            //alert(filtered);
            //alert(this.get('cart').items);
        },
        remove(item) {
            this.get('cart').remove(item);
            this.get('binu').remove(item);
          },
        clear(){
            this.get('binu').empty();
            var textFiled = $("#searchInput");

           
            textFiled.val("");
        }

    }
});

