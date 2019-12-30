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
  "name": "I enter username as \"\u003cuserName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "You should see the SIGN-OFF text",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 12,
      "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test;;1"
    },
    {
      "cells": [
        "earth",
        "earth"
      ],
      "line": 13,
      "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test;;2"
    },
    {
      "cells": [
        "jupiter",
        "jupiter"
      ],
      "line": 14,
      "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test;;3"
    },
    {
      "cells": [
        "mercury",
        "mercury"
      ],
      "line": 15,
      "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test;;4"
    },
    {
      "cells": [
        "saturn",
        "saturn"
      ],
      "line": 16,
      "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test;;5"
    },
    {
      "cells": [
        "uranus",
        "uranus"
      ],
      "line": 17,
      "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test;;6"
    },
    {
      "cells": [
        "mars",
        "mars"
      ],
      "line": 18,
      "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test;;7"
    },
    {
      "cells": [
        "venus",
        "venus"
      ],
      "line": 19,
      "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12314454600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "DDF login funcionality positive test",
  "description": "",
  "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I enter username as \"earth\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter password as \"earth\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "You should see the SIGN-OFF text",
  "keyword": "Then "
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
  "duration": 666155300,
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
  "duration": 617757400,
  "status": "passed"
});
formatter.match({
  "location": "NewToursLogin.i_click_on_login_button()"
});
formatter.result({
  "duration": 5748414400,
  "status": "passed"
});
formatter.match({
  "location": "NewToursLogin.you_should_see_the_logo()"
});
formatter.result({
  "duration": 104962600,
  "status": "passed"
});
formatter.after({
  "duration": 4554831000,
  "status": "passed"
});
formatter.before({
  "duration": 10698679000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "DDF login funcionality positive test",
  "description": "",
  "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I enter username as \"jupiter\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter password as \"jupiter\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "You should see the SIGN-OFF text",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "jupiter",
      "offset": 21
    }
  ],
  "location": "NewToursLogin.i_enter_username_as(String)"
});
formatter.result({
  "duration": 665497500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jupiter",
      "offset": 21
    }
  ],
  "location": "NewToursLogin.i_enter_password_as(String)"
});
formatter.result({
  "duration": 633435300,
  "status": "passed"
});
formatter.match({
  "location": "NewToursLogin.i_click_on_login_button()"
});
formatter.result({
  "duration": 5174814900,
  "status": "passed"
});
formatter.match({
  "location": "NewToursLogin.you_should_see_the_logo()"
});
formatter.result({
  "duration": 70161100,
  "status": "passed"
});
formatter.after({
  "duration": 4332795200,
  "status": "passed"
});
formatter.before({
  "duration": 10886354900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "DDF login funcionality positive test",
  "description": "",
  "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I enter username as \"mercury\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter password as \"mercury\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "You should see the SIGN-OFF text",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mercury",
      "offset": 21
    }
  ],
  "location": "NewToursLogin.i_enter_username_as(String)"
});
formatter.result({
  "duration": 200014500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mercury",
      "offset": 21
    }
  ],
  "location": "NewToursLogin.i_enter_password_as(String)"
});
formatter.result({
  "duration": 332800100,
  "status": "passed"
});
formatter.match({
  "location": "NewToursLogin.i_click_on_login_button()"
});
formatter.result({
  "duration": 5056387800,
  "status": "passed"
});
formatter.match({
  "location": "NewToursLogin.you_should_see_the_logo()"
});
formatter.result({
  "duration": 265455600,
  "status": "passed"
});
formatter.after({
  "duration": 1397942100,
  "status": "passed"
});
formatter.before({
  "duration": 10818580200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "DDF login funcionality positive test",
  "description": "",
  "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I enter username as \"saturn\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter password as \"saturn\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "You should see the SIGN-OFF text",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "saturn",
      "offset": 21
    }
  ],
  "location": "NewToursLogin.i_enter_username_as(String)"
});
formatter.result({
  "duration": 264028000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "saturn",
      "offset": 21
    }
  ],
  "location": "NewToursLogin.i_enter_password_as(String)"
});
formatter.result({
  "duration": 206459400,
  "status": "passed"
});
formatter.match({
  "location": "NewToursLogin.i_click_on_login_button()"
});
formatter.result({
  "duration": 5144767700,
  "status": "passed"
});
formatter.match({
  "location": "NewToursLogin.you_should_see_the_logo()"
});
formatter.result({
  "duration": 152775300,
  "status": "passed"
});
formatter.after({
  "duration": 4929625300,
  "status": "passed"
});
formatter.before({
  "duration": 10674507500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "DDF login funcionality positive test",
  "description": "",
  "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I enter username as \"uranus\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter password as \"uranus\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "You should see the SIGN-OFF text",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "uranus",
      "offset": 21
    }
  ],
  "location": "NewToursLogin.i_enter_username_as(String)"
});
formatter.result({
  "duration": 292548500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "uranus",
      "offset": 21
    }
  ],
  "location": "NewToursLogin.i_enter_password_as(String)"
});
formatter.result({
  "duration": 261548500,
  "status": "passed"
});
formatter.match({
  "location": "NewToursLogin.i_click_on_login_button()"
});
formatter.result({
  "duration": 5082874900,
  "status": "passed"
});
formatter.match({
  "location": "NewToursLogin.you_should_see_the_logo()"
});
formatter.result({
  "duration": 182600300,
  "status": "passed"
});
formatter.after({
  "duration": 4789030000,
  "status": "passed"
});
formatter.before({
  "duration": 10462867200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "DDF login funcionality positive test",
  "description": "",
  "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I enter username as \"mars\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter password as \"mars\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "You should see the SIGN-OFF text",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mars",
      "offset": 21
    }
  ],
  "location": "NewToursLogin.i_enter_username_as(String)"
});
formatter.result({
  "duration": 611125100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mars",
      "offset": 21
    }
  ],
  "location": "NewToursLogin.i_enter_password_as(String)"
});
formatter.result({
  "duration": 641598000,
  "status": "passed"
});
formatter.match({
  "location": "NewToursLogin.i_click_on_login_button()"
});
formatter.result({
  "duration": 5238090400,
  "status": "passed"
});
formatter.match({
  "location": "NewToursLogin.you_should_see_the_logo()"
});
formatter.result({
  "duration": 184959800,
  "status": "passed"
});
formatter.after({
  "duration": 4861309300,
  "status": "passed"
});
formatter.before({
  "duration": 10825994600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "DDF login funcionality positive test",
  "description": "",
  "id": "data-driven-testing-of-newtours;ddf-login-funcionality-positive-test;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I enter username as \"venus\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter password as \"venus\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "You should see the SIGN-OFF text",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "venus",
      "offset": 21
    }
  ],
  "location": "NewToursLogin.i_enter_username_as(String)"
});
formatter.result({
  "duration": 281368600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "venus",
      "offset": 21
    }
  ],
  "location": "NewToursLogin.i_enter_password_as(String)"
});
formatter.result({
  "duration": 191379900,
  "status": "passed"
});
formatter.match({
  "location": "NewToursLogin.i_click_on_login_button()"
});
formatter.result({
  "duration": 5630750200,
  "status": "passed"
});
formatter.match({
  "location": "NewToursLogin.you_should_see_the_logo()"
});
formatter.result({
  "duration": 83638300,
  "status": "passed"
});
formatter.after({
  "duration": 748451600,
  "status": "passed"
});
});