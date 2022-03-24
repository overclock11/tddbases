import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";
import {getPost, newPost} from "./api/api";
import * as api from "./api/api";

describe('mocks testing', ()=>{

  beforeAll(() => {
    render(<App />);
  })

  test('renders learn react link', () => {
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('mock get comments', async () => {
    const spyGetPost = jest.spyOn(api, 'getPost');
    const getApiResult = (): Promise<any> => spyGetPost.mock.results[0].value;
    spyGetPost.mockResolvedValue(true);
    const button = screen.getByTestId('get');
    userEvent.click(button);
    console.log(await getApiResult());
    expect(await getApiResult()).toBe(true);
    expect(spyGetPost).toHaveBeenCalled();
    spyGetPost.mockRestore();
  });

  test('mock post comment', async () => {
    const spyPostComment = jest.spyOn(api, 'newPost');
    const getApiResult = (): Promise<any> => spyPostComment.mock.results[0].value;
    const button = screen.getByTestId('post');
    userEvent.click(button);
    expect(await getApiResult()).toEqual({
      "title": "foo",
      "body": "bar",
      "userId": 1,
      "id": 101
    });
    expect(spyPostComment).toHaveBeenCalled();
    spyPostComment.mockRestore();
  });
});

