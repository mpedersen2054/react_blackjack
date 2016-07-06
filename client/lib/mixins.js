/* Mixins Demo */
/* http://simblestudios.com/blog/development/react-mixins-by-example.html */
var UselessMixin = {
  componentDidMount: function () {
    console.log("Just mounted !");
  }
};

export const CascadedMixin = {
  mixins: [UselessMixin]
}