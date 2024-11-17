import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function MyCustomPage() {
    const navigate = useNavigate();
  const [documentData, setDocumentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const docRef = doc(db, "custompages", id);

      try {
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setDocumentData(docSnap.data());
           
        } else {
          console.error("Document does not exist!");
          navigate("/404");
        }
      } catch (error) {
        console.error("Error getting document:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <Wrapper className="pc">
      {documentData && (
        <div
          dangerouslySetInnerHTML={{
            __html:
              t("mainLang") === "az"
                ? documentData.contentAz
                : documentData.contentEng,
          }}
        ></div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  padding: 50px 12px;
  height: 80vh;

  h2 {
    font-size: 60px;
  }
  a {
    font-size: 18px;
    border: 1px solid #000;
    padding: 12px 24px;
    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
`;
