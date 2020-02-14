export class Component {
   constructor(id) {
      this.$el = document.getElementById(id);
      //select elem 
      this.init();
   };

   init() {};

   //methods to show and hide block 
   hide() {
      this.$el.classList.add('hide');
   };
   show() {
      this.$el.classList.remove('hide');
   };
};