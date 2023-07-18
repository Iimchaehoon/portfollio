"use-strict";
new TypeIt(".home__title--strong", {
  speed: 100,
}) //Web Developer

  .move(-13)
  .type("Amazing ")
  .pause(1000)
  .move(null, { to: "END" })
  .delete()
  .type("Front-end Enginneer")
  .go();
