import React, { forwardRef, useEffect } from "react";
import { TableStyledStyle } from "../layout/styled-component/TableStyled.style";
import { useForm } from "react-hook-form";

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
      <button type="button">TEST REF_ONE</button>
      <button type="button">TEST REF_TWO</button>
    </>
  );
});

export default Child;
