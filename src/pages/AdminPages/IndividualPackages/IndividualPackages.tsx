import { useState, useEffect } from "react";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import PageMeta from "../../../components/common/PageMeta";
import Input from "../../../components/form/input/InputField";
import Label from "../../../components/form/Label";
import Button from "../../../components/ui/button/Button";
import ComponentCard from "../../../components/common/ComponentCard";
import axios from "axios";

export default function IndividualPackages() {
  const [packages, setPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch packages on mount
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const token = localStorage.getItem("admin-token");
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/admin/individual-packages`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        // Add "editable" flag to each package
        setPackages(
          res.data.packages.map((pkg: any) => ({
            ...pkg,
            editable: false,
            features: pkg.features?.length ? pkg.features : ["", "", ""],
          }))
        );
      } catch (error) {
        console.error("Error fetching packages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const toggleEdit = (index: number) => {
    setPackages((prev) =>
      prev.map((pkg, i) =>
        i === index ? { ...pkg, editable: !pkg.editable } : pkg
      )
    );
  };

  const handleChange = (index: number, field: string, value: any) => {
    setPackages((prev) =>
      prev.map((pkg, i) => (i === index ? { ...pkg, [field]: value } : pkg))
    );
  };

  const handleFeatureChange = (
    pkgIndex: number,
    featureIndex: number,
    value: string
  ) => {
    setPackages((prev) =>
      prev.map((pkg, i) =>
        i === pkgIndex
          ? {
              ...pkg,
              features: pkg.features.map((f: string, fi: number) =>
                fi === featureIndex ? value : f
              ),
            }
          : pkg
      )
    );
  };

  const handleUpdate = async (index: number) => {
    const updatedPackage = { ...packages[index] };
    delete updatedPackage.editable; // don't send editable flag to backend

    try {
      const token = localStorage.getItem("admin-token"); // Assuming the token is stored in localStorage
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/admin/packages/individual/${
          updatedPackage._id
        }`,
        updatedPackage,
        {
          // withCredentials: true,
          headers: {
            Authorization: `${token}`, // Send the token in the Authorization header
          },
        }
      );

      // Replace updated package in state
      setPackages((prev) =>
        prev.map((pkg, i) =>
          i === index ? { ...res.data.package, editable: false } : pkg
        )
      );
    } catch (error) {
      console.error("Error updating package:", error);
    }
  };

  if (loading) return <p>Loading packages...</p>;

  return (
    <div>
      <PageMeta
        title="Individual Packages"
        description="Edit subscription packages"
      />
      <PageBreadcrumb pageTitle="Individual Packages" />

      <div className="grid grid-cols-1 gap-6">
        {packages?.map((pkg, index) => (
          <div key={pkg._id}>
            <ComponentCard title={pkg.name}>
              {/* Package Name */}
              <div className="mb-3">
                <Label>Package Name</Label>
                <Input
                  type="text"
                  value={pkg.name}
                  disabled={!pkg.editable}
                  onChange={(e) => handleChange(index, "name", e.target.value)}
                />
              </div>

              {/* Description */}
              <div className="mb-3">
                <Label>Description</Label>
                <Input
                  type="text"
                  value={pkg.description}
                  disabled={!pkg.editable}
                  onChange={(e) =>
                    handleChange(index, "description", e.target.value)
                  }
                />
              </div>

              {/* Period Type */}
              <div className="mb-3">
                <Label>Period Type</Label>
                <Input
                  type="text"
                  value={pkg.periodType}
                  disabled={!pkg.editable}
                  onChange={(e) =>
                    handleChange(index, "periodType", e.target.value)
                  }
                />
              </div>

              {/* Days Count */}
              <div className="mb-3">
                <Label>Days Count</Label>
                <Input
                  type="number"
                  value={pkg.daysCount}
                  disabled={!pkg.editable}
                  onChange={(e) =>
                    handleChange(index, "daysCount", parseInt(e.target.value))
                  }
                />
              </div>

              {/* Amount */}
              <div className="mb-3">
                <Label>Amount</Label>
                <Input
                  type="number"
                  value={pkg.amount}
                  disabled={!pkg.editable}
                  onChange={(e) =>
                    handleChange(index, "amount", parseFloat(e.target.value))
                  }
                />
              </div>

              {/* Features */}
              <div className="mb-3">
                <Label>Features</Label>
                {pkg.features.map((feature: string, fi: number) => (
                  <div key={fi} className="mb-2">
                    <Input
                      type="text"
                      value={feature}
                      disabled={!pkg.editable}
                      onChange={(e) =>
                        handleFeatureChange(index, fi, e.target.value)
                      }
                      placeholder={`Feature ${fi + 1}`}
                    />
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-4">
                {!pkg.editable ? (
                  <Button
                    onClick={() => toggleEdit(index)}
                    className="rounded bg-blue-600 px-8 py-2 text-white hover:bg-blue-700"
                  >
                    Edit
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleUpdate(index)}
                    className="rounded bg-green-600 px-8 py-2 text-white hover:bg-green-700"
                  >
                    Update
                  </Button>
                )}
              </div>
            </ComponentCard>
          </div>
        ))}
      </div>
    </div>
  );
}
