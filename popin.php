<?php
/**
 * Plugin Name: Initialcrow popin
 * Plugin URI: https://github.com/InitialCrow/worpress-initial-popin-plugin
 * Description: A wordpress Plugin to display informative popin made by initialcrow
 * Version: 0.0.1
 * Author: Initialcrow
 * Author URI: https://adam-parent.com
 */


add_action( 'wp_enqueue_scripts', 'popin_script_load' );

add_action( 'wp_footer', 'popin_init' );
function popin_script_load(){
  popin_style_load();
  wp_enqueue_script( 'popin_load', plugins_url( 'initial_popin/js/main.js' , dirname(__FILE__)), array( 'jquery' ) );
}
function popin_style_load(){
  wp_enqueue_style( 'popin_style_load', plugins_url( 'initial_popin/css/main.css' , dirname(__FILE__)) );
}

function popin_init(){
  ?><script>window.initial_popin.init();</script><?php
}