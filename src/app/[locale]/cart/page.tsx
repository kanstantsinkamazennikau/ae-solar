import AddMorePanels from "@/app/[locale]/cart/component/AddMorePanels";
import CheckOut from "@/app/[locale]/cart/component/CheckOut";
import ModelsInCart from "@/app/[locale]/cart/component/ModelsInCart";
import BasicWidthContainer from "@/app/[locale]/components/common/BasicWidthContainer";

export default function Cart() {
  return (
    <BasicWidthContainer>
      <CheckOut />
      <ModelsInCart />
      <AddMorePanels />
    </BasicWidthContainer>
  );
}
