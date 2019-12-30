$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("NewToursDemo.feature");
formatter.feature({
  "line": 1,
  "name": "Data Driven Testing of Newtours",
  "description": "",
  "id": "data-driven-testing-of-newtours",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "DDF login funcionality positive test",
  "description": "",
  "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "navigate To Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"\u003cuserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "You should see the SIGN-OFF text",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 13,
      "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test;;1"
    },
    {
      "cells": [
        "earth",
        "earth"
      ],
      "line": 14,
      "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test;;2"
    },
    {
      "cells": [
        "jupiter",
        "jupiter"
      ],
      "line": 15,
      "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test;;3"
    },
    {
      "cells": [
        "mercury",
        "mercury"
      ],
      "line": 16,
      "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test;;4"
    },
    {
      "cells": [
        "saturn",
        "saturn"
      ],
      "line": 17,
      "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test;;5"
    },
    {
      "cells": [
        "uranus",
        "uranus"
      ],
      "line": 18,
      "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test;;6"
    },
    {
      "cells": [
        "mars",
        "mars"
      ],
      "line": 19,
      "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test;;7"
    },
    {
      "cells": [
        "venus",
        "venus"
      ],
      "line": 20,
      "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "DDF login funcionality positive test",
  "description": "",
  "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "navigate To Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"earth\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"earth\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "You should see the SIGN-OFF text",
  "keyword": "Then "
});
formatter.match({
  "location": "NewToursLogin.navigate_To_Page()"
});
formatter.result({
  "duration": 5823279900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "earth",
      "offset": 21
    }
  ],
  "location": "NewToursLogin.i_enter_username_as(String)"
});
formatter.result({
  "duration": 186051100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "earth",
      "offset": 21
    }
  ],
  "location": "NewToursLogin.i_enter_password_as(String)"
});
formatter.result({
  "duration": 102156900,
  "status": "passed"
});
formatter.match({
  "location": "NewToursLogin.i_click_on_login_button()"
});
