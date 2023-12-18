import React from "react";
import CustomBtn from "../../common/button";
import { SectionHeading } from "../../screens/home/index.style";
import { CodeContainer } from "./index.style";

const CodeSection = () => {
  return (
    <CodeContainer>
      <SectionHeading>
        <strong>Test</strong> Your Code
      </SectionHeading>
      <p>
        With our online MySQL editor, you can edit the SQL statements, and click
        on a button to view the result
      </p>
      <p>1.5M Executions</p>
      <div className='codeSection'>
        <code className='codeContainer'>
          <div>
            <p>
              SELECT * FROM
              <span>Customers</span>
            </p>
            <p>
              WHERE <span>Country=</span> 'Mexico';
            </p>
          </div>
        </code>
        <div className='showBtn'>
          <CustomBtn title='Try it yourself' />
        </div>
      </div>
    </CodeContainer>
  );
};

export default CodeSection;
