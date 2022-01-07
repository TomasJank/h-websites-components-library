### Use cases
If you need to get colors, media query mixins or functions
you will have to import whole folder in to scss file 
you are working on;

### Import
Do not simply use import syntax @import;

Use: *** @use '../public' as *; ***;

It will allow you to use all variables, functions and mixins
with prefix;

### Prefixes
f-* for Functions ( f-str-replace() );
mix-* for Mixins ( mix-media-breakpoint-up(xl) {} );
color-* for Colors ( color-get('primary', 'dark'); );
var-* for Variables ( var-font-weights );