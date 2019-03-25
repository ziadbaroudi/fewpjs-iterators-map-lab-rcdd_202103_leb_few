function titleCased(tutorials) {
  return tutorials.map(function (tutorial) {
    tutorial = tutorial.split(' ');
    for (var i = 0; i < tutorial.length; i++) {
      tutorial[i] = tutorial[i].charAt(0).toUpperCase() + tutorial[i].slice(1);
    }
    return tutorial.join(' ');
  });
}