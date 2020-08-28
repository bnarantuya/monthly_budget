import React from "react";
import Welcome from './Welcome';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

describe('Welcome page testing', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
    jest.clearAllMocks();
  });

  it('Welcome page draws correctly', () => {
    act(() => {
      render(<Welcome/>, container);
    });
    const welcomeHeader = document.getElementsByName('h3').length;
    expect(welcomeHeader).toEqual(1);
  })
})