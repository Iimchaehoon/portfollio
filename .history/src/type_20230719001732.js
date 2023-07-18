"use-strict";
new TypeIt(".home__title--strong") //Web Developer
  .move(-13)
  .type("Amazing ")
  .move(null, { to: "END" })
  .delete()
  .type("Front-end Enginneer")
  .go();
