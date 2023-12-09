import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { ROUTES } from "../../utils/routes";
import {useGetProductQuery} from "../../features/api/apiSlice";


const SingleProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

    useEffect(() => {
        if (!isFetching && !isLoading && !isSuccess) {
            navigate(ROUTES.HOME);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, isFetching, isSuccess]);

    return <div>SingleProduct</div>
};


export default SingleProduct;
