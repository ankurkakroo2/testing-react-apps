import { Selector } from "testcafe";
import LoginPage from "./pageModalLogin";
import {username, password} from "./pageModalLogin";
import { axeCheck, createReport } from 'axe-testcafe';
import {
  UserName,
  Password,
  Wrong_Details,
  Blank_UserName,
  Blank_Password,
  Dashboard_Message
} from "../src/constants";
import { wait } from "@testing-library/react";

fixture`Getting Started`.page`http://localhost:3000/`;

test("My first test", async t => {
  await LoginPage.userLogin("admin", "admin");
  await t.expect((LoginPage.title).exists).ok;
});



test("My second test", async t => {

  await t.expect((LoginPage.loginTitle).exists).ok;

});


