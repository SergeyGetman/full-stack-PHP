import React, { forwardRef, useEffect } from "react";
import { TableStyledStyle } from "../layout/styled-component/TableStyled.style";
import { useForm } from "react-hook-form";
import axios, { AxiosResponse } from "axios";
import { mock_data } from "../api/general_request";

const Child = forwardRef((props: any, ref) => {
  const newRef = { ...props };
  const { setFocus, setValue } = useForm();

  return (
    <>
      <TableStyledStyle>
        <table>
          <tr ref={ref as React.RefObject<any>}>
            <th>ONE</th>
            <th>TWO</th>
            <th>THEE</th>
          </tr>
          <tr>
            <td>Alfred's Stutterer</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Alfred's Stutterer</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Alfred's Stutterer</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
        </table>
      </TableStyledStyle>

      <input
        id={props?.id}
        type="text"
        placeholder="enter your name"
        name="focused"
        ref={ref as React.RefObject<HTMLInputElement>}
      />
      <input
        id={props?.id}
        type="text"
        placeholder="enter your full name"
        ref={ref as React.RefObject<HTMLInputElement>}
      />
      <input
        id={props?.id}
        type="text"
        placeholder="enter your age"
        ref={ref as React.RefObject<HTMLInputElement>}
      />
      <br />

      <form action="http://roud-map/register" method="POST">
        <input type="text" name="name" />
        <input type="text" name="email" />
        <input type="text" name="login" />
        <input type="text" name="password" />
        <button type="submit">Відправити</button>
      </form>
    </>
  );
});

export default Child;
