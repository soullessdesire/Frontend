import React from "react";
import "./User.css";

const Programs = () => {
  return (
    <div
      className="table"
      style={{
        overflowY: "scroll",
        display: "flex",
        height: "calc(100vh - 90px)",
      }}
    >
      <table>
        <thead>
          <tr>
            <th>Checkbox</th>
            <th>ProgramID</th>
            <th>Program</th>
            <th>Description</th>
            <th>Therapist/Conductor</th>
            <th>Duration</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>DR001</td>
            <td>Drug Detox</td>
            <td>Initial detox program</td>
            <td>Dr. Alice Brown</td>
            <td>7 days</td>
            <td>$500</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>DR002</td>
            <td>Inpatient Rehab</td>
            <td>Comprehensive drug rehab</td>
            <td>Dr. Bob Green</td>
            <td>30 days</td>
            <td>$2000</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>DR003</td>
            <td>Outpatient Rehab</td>
            <td>Drug rehab with daily sessions</td>
            <td>Dr. Carol White</td>
            <td>60 days</td>
            <td>$1500</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>CT001</td>
            <td>Couples Counseling</td>
            <td>Basic therapy for couples</td>
            <td>Therapist David Black</td>
            <td>1 hour/session</td>
            <td>$100/session</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>CT002</td>
            <td>Intensive Couples Therapy</td>
            <td>Weekend therapy retreat</td>
            <td>Therapist Emma Blue</td>
            <td>3 days</td>
            <td>$800</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>CT003</td>
            <td>Communication Workshop</td>
            <td>Improving communication skills</td>
            <td>Therapist Frank Yellow</td>
            <td>2 hours</td>
            <td>$150</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>PT001</td>
            <td>Physical Therapy Initial Consultation</td>
            <td>Assessment and plan</td>
            <td>Dr. Grace Gray</td>
            <td>1 hour</td>
            <td>$120</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>PT002</td>
            <td>Post-Surgery Rehab</td>
            <td>Rehabilitation after surgery</td>
            <td>Dr. Henry Orange</td>
            <td>4 weeks</td>
            <td>$1000</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>PT003</td>
            <td>Sports Injury Therapy</td>
            <td>Therapy for sports injuries</td>
            <td>Dr. Irene Red</td>
            <td>6 weeks</td>
            <td>$1200</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>PT004</td>
            <td>Chronic Pain Management</td>
            <td>Therapy for chronic pain</td>
            <td>Dr. Jack Purple</td>
            <td>8 weeks</td>
            <td>$1600</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Programs;
